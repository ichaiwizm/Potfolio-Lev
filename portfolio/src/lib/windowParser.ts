export type WindowCommand = {
  title: string;
  width?: number;
  height?: number;
  key?: string;
  contentHtml: string;
};

export type ParseResult = {
  displayContent: string;
  windows: WindowCommand[];
};

export function parseWindowCommands(content: string): ParseResult {
  const windows: WindowCommand[] = [];
  let displayContent = content;

  // Match JSON code blocks: ```json\n{...}\n```
  const jsonBlockRegex = /```json\s*\n([\s\S]*?)\n```/g;
  const matches = [...content.matchAll(jsonBlockRegex)];

  matches.forEach((match) => {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed.type === "create_window" && parsed.window) {
        windows.push(parsed.window);
        // Replace with italic text
        displayContent = displayContent.replace(
          match[0],
          "_✨ Création de fenêtre en cours..._"
        );
      }
    } catch (e) {
      // Invalid JSON, keep as is
    }
  });

  return { displayContent, windows };
}
