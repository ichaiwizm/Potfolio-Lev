import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

type ChatMessage = { role: "user" | "assistant"; content: string }

type ChatPreviewProps = {
  messages: ChatMessage[]
  expanded: boolean
  onToggle: () => void
}

function softenContent(input: string): string {
  // Minimiser l'impact visuel du markdown: retirer titres, gras, code inline, listes lourdes
  return input
    .replace(/^#+\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function ChatPreview({ messages, expanded, onToggle }: ChatPreviewProps) {
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" })
  }, [messages.length, expanded])

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 w-full max-w-xl px-4">
      <div className="relative rounded-xl border bg-background/40 p-2 shadow-none backdrop-blur-sm text-xs text-foreground/70">
        <div className="flex items-center justify-end mb-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 rounded-full text-foreground/60 hover:text-foreground/70 hover:bg-transparent"
            aria-label={expanded ? "Réduire" : "Déplier"}
            onClick={onToggle}
          >
            {expanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </Button>
        </div>
        <div className={expanded ? "max-h-36 overflow-y-auto pr-2" : "max-h-16 overflow-y-auto pr-2"} aria-live="polite">
          <div className="flex flex-col gap-1.5 leading-snug">
            {messages.length === 0 && (
              <p className="italic text-foreground/60">Salut, comment puis-je vous aider ?</p>
            )}
            {messages.map((m, i) => {
              const isUser = m.role === "user"
              return (
                <div key={i} className={isUser ? "flex justify-end" : "flex justify-start"}>
                  <p
                    className={
                      (isUser
                        ? "italic font-light text-foreground/60"
                        : "not-italic font-serif text-foreground/70") +
                      " max-w-[80%] whitespace-pre-wrap"
                    }
                  >
                    {softenContent(m.content)}
                  </p>
                </div>
              )
            })}
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </div>
  )
}


