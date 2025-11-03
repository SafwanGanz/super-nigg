export class Storage {
  getItem(itemName: string): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(itemName);
  }

  getLength(): number {
    if (typeof window === 'undefined') return 0;
    return localStorage.length;
  }

  getItemName(keyValue: number): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.key(keyValue);
  }

  setItem(itemName: string, itemData: any) {
    if (typeof window === 'undefined') return;
    localStorage.setItem(itemName, JSON.stringify(itemData));
  }

  clear() {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  }
}
