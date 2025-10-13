import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-9">
        <PhotoWidget
          photo={{
            id: "1",
            title: "Foto de um gato",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Gatos" },
              { id: "2", title: "Cachorro" },
              { id: "3", title: "Papagaio" },
            ],
          }}
        />
        <PhotoWidget photo={{} as Photo} loading />
      </div>
    </Container>
  );
}
