export function scrollWindow(ref: any): void {
    ref.current.scrollIntoView({ behavior: 'smooth' });
}
