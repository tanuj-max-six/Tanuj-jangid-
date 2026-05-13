/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Fragrance {
  id: string;
  name: string;
  type: string;
  notes: string[];
  price: number;
  description: string;
  image: string;
  video?: string;
  color: string;
}

export const FRAGRANCES: Fragrance[] = [
  {
    id: "laura-noire",
    name: "L'Aura Noire",
    type: "Extrait de Parfum",
    notes: ["Black Amber", "Myrrh", "Night Jasmine"],
    price: 285,
    description: "A celestial convergence of dark smoke and midnight jasmine. An olfactory portrait of the shadow self.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1000",
    video: "https://cdn.pixabay.com/video/2022/01/18/104618-666324296_tiny.mp4",
    color: "#1a0f1f"
  },
  {
    id: "santal-mystic",
    name: "Santal Mystic",
    type: "Eau de Parfum",
    notes: ["Sacred Sandalwood", "Cardamom", "White Musk"],
    price: 245,
    description: "An ancient forest at twilight. Creamy sandalwood meets the spark of green cardamom.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=1000",
    video: "https://cdn.pixabay.com/video/2021/08/04/83907-584742681_tiny.mp4",
    color: "#2a1a12"
  },
  {
    id: "forest-rites",
    name: "Forest Rites",
    type: "Parfum Concentré",
    notes: ["Damp Moss", "Pine Needle", "Cold Ash"],
    price: 310,
    description: "The ritual of the deep woods. A primal, grounding scent of earth and ancient trees.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1000",
    video: "https://cdn.pixabay.com/video/2020/07/28/45749-445657805_tiny.mp4",
    color: "#0f1a14"
  },
  {
    id: "velvet-noir",
    name: "Velvet Noir",
    type: "Eau de Parfum",
    notes: ["Damask Rose", "Oud", "Pink Pepper"],
    price: 260,
    description: "A heavy velvet curtain of rose and spice. opulent, rich, and deeply intoxicating.",
    image: "https://images.unsplash.com/photo-1590736704728-f472d5118576?auto=format&fit=crop&q=80&w=1000",
    video: "https://cdn.pixabay.com/video/2022/03/10/110332-687258327_tiny.mp4",
    color: "#1f0f0f"
  }
];
