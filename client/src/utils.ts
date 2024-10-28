export function openSidebar() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
  }
}

export function closeSidebar() {
  if (typeof window !== 'undefined') {
    document.documentElement.style.removeProperty('--SideNavigation-slideIn');
    document.body.style.removeProperty('overflow');
  }
}

export function toggleSidebar() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const slideIn = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue('--SideNavigation-slideIn');
    if (slideIn) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
}

export async function callApi(url: string) {
  const response = await fetch(url);

  if (response.status === 400) {
    const errorData = await response.json();
    throw new Error(errorData.error);
  } else if (!response.ok) {
    throw new Error('An unknown error occurred');
  }

  const data: { word: string; score: number }[] = await response.json();

  // Convert the JSON data to a list of tuples
  const resultTuples: [string, number][] = data.map(({ word, score }) => [word, score]);

  return resultTuples;
}