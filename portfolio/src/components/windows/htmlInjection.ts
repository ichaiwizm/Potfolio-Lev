export async function renderHtmlWithScripts(container: HTMLElement, html: string): Promise<void> {
  container.innerHTML = html;
  const scripts = Array.from(container.querySelectorAll('script'));
  const exec = (oldScript: HTMLScriptElement) => new Promise<void>((resolve, reject) => {
    const newScript = document.createElement('script');
    for (const attr of Array.from(oldScript.attributes)) newScript.setAttribute(attr.name, attr.value);
    if (oldScript.textContent) newScript.textContent = oldScript.textContent;
    newScript.onload = () => resolve();
    newScript.onerror = () => reject(new Error('Script load error'));
    oldScript.replaceWith(newScript);
    if (!newScript.src) resolve();
  });
  for (const s of scripts) {
    // Preserve execution order
    // eslint-disable-next-line no-await-in-loop
    await exec(s);
  }
}

export function clearContainer(container: HTMLElement) {
  while (container.firstChild) container.removeChild(container.firstChild);
}

