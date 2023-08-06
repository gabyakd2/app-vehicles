export interface CartDetail {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
  title: string;
  description: string;
  model_features: Modelfeature[];
  model_highlights: Modelhighlight[];
}

interface Modelhighlight {
  title: string;
  content: string;
  image: string;
}

interface Modelfeature {
  name: string;
  description: string;
  image: string;
}
