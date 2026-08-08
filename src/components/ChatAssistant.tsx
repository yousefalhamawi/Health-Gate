import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };
const welcome: ChatMessage = { role: 'assistant', content: 'Hello! I’m the Health Gate assistant. I can help you explore our services, products, contact details, and working hours.' };
const contactPattern = /(\+\d[\d\s-]{7,}\d|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/gi;

function renderMessageContent(content: string) {
  return content.split(contactPattern).map((part, index) => {
    if (/^\+\d[\d\s-]{7,}\d$/.test(part)) return <a key={index} href={`https://wa.me/${part.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer">{part}</a>;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(part)) return <a key={index} href={`mailto:${part}`}>{part}</a>;
    return part;
  });
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false); const [messages, setMessages] = useState<ChatMessage[]>([welcome]); const [input, setInput] = useState(''); const [isSending, setIsSending] = useState(false);
  const endRef = useRef<HTMLDivElement>(null); const reduced = useReducedMotion();
  useEffect(() => { if (isOpen) endRef.current?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); }, [isOpen, messages, isSending, reduced]);
  const sendMessage = async (event: FormEvent) => {
    event.preventDefault(); const question = input.trim(); if (!question || isSending) return;
    const nextMessages = [...messages, { role: 'user' as const, content: question }]; setMessages(nextMessages); setInput(''); setIsSending(true);
    try { const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: nextMessages }) }); const data = await response.json(); setMessages((current) => [...current, { role: 'assistant', content: data.answer || data.error || 'Sorry, I could not answer that right now.' }]); }
    catch { setMessages((current) => [...current, { role: 'assistant', content: 'Connection problem. Please try again, or contact us directly.' }]); }
    finally { setIsSending(false); }
  };
  return <div className="chat-assistant"><AnimatePresence>{isOpen && <motion.section initial={reduced ? false : { opacity: 0, y: 16, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .97 }} transition={{ duration: .22 }} className="chat-panel" aria-label="Health Gate assistant"><header className="chat-header"><span className="chat-icon"><Bot size={18}/></span><div><strong>Health Gate Assistant</strong><small><i/> Available to help</small></div><button type="button" onClick={() => setIsOpen(false)} aria-label="Close assistant"><X size={18}/></button></header><div className="chat-messages" aria-live="polite">{messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}><p>{renderMessageContent(message.content)}</p></div>)}{isSending && <div className="chat-message assistant typing" aria-label="Assistant is typing"><i/><i/><i/></div>}<div ref={endRef}/></div><form className="chat-form" onSubmit={sendMessage}><label className="sr-only" htmlFor="assistant-message">Ask Health Gate a question</label><input id="assistant-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about products or services…" maxLength={2500} disabled={isSending}/><button type="submit" disabled={!input.trim() || isSending} aria-label="Send message"><Send size={16}/></button></form><p className="chat-disclaimer">Information only — not medical advice.</p></motion.section>}</AnimatePresence><motion.button type="button" className="chat-launcher" onClick={() => setIsOpen((open) => !open)} whileTap={{ scale: .94 }} aria-label={isOpen ? 'Close Health Gate assistant' : 'Open Health Gate assistant'} aria-expanded={isOpen}>{isOpen ? <X size={22}/> : <MessageCircle size={22}/>}<span>Ask us</span></motion.button></div>;
}
