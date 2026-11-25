/** Descriptions keyed by original asset path, before Next image optimization. */
export const IMAGE_ALT: Record<string, string> = {
  "/assets/Home/SMIA_collage_v3.webp": "Campus life at Seedling Modern International Academy, Jaipur",
  "/assets/Home/classroom-2.webp": "Seedling Cambridge students learning in a Jaipur classroom",
  "/assets/Home/SIA_collage_v3.webp": "Student activities at Seedling International Academy, Jaipur",
  "/assets/SHOWCASING WONDERLAND/1.JPG": "Students performing at Seedling Cambridge Wonderland",
};

export function imageAltFor(src: string, title: string): string {
  return IMAGE_ALT[src] ?? `${title} — Seedling Cambridge Jaipur`;
}
