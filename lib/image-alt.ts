/** Descriptions keyed by original asset path, before Next image optimization. */
export const IMAGE_ALT: Record<string, string> = {
  "/assets/Home/SMIA_collage_v3.webp": "Collage of campus life at Seedling Modern International Academy, Jaipur",
  "/assets/Home/classroom-2.webp": "Students in a classroom at Seedling Cambridge, Jaipur",
  "/assets/Home/SIA_collage_v3.webp": "Collage of student activities at Seedling International Academy, Jaipur",
  "/assets/SHOWCASING WONDERLAND/1.JPG": "Students performing at the Seedling Cambridge Wonderland annual showcase"
};

export function imageAltFor(src: string, title: string): string {
  return IMAGE_ALT[src] ?? `${title} — Seedling Cambridge Jaipur`;
}
