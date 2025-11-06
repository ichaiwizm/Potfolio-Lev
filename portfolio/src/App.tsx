import { useState } from "react";
import { Header } from "@/components/Header";
import { ChatPreview } from "@/components/chat/ChatPreview";
import { PromptBar } from "@/components/chat/PromptBar";
import { sendChat } from "@/lib/api";
import type { ChatMessage } from "@/lib/api";

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(message: string) {
    try {
      setLoading(true);
      const next: ChatMessage[] = [...messages, { role: "user", content: message }];
      setMessages(next);
      const content = await sendChat(next);
      setMessages((prev) => [...prev, { role: "assistant", content: content || "" }]);
    } catch (e) {
      setMessages((prev) => [...prev, { role: "assistant", content: "(Erreur lors de la requête)" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <ChatPreview messages={messages} expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
      <PromptBar onSubmit={handleSubmit} loading={loading} />
    </>
  );
}

export default App;
