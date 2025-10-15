import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "1", title: "Gatos" },
          { id: "2", title: "Cachorro" },
          { id: "3", title: "Papagaio" },
        ]}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "1",
            title: "Foto de um gato",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Gatos" },
              { id: "2", title: "Cachorro" },
              { id: "3", title: "Papagaio" },
            ],
          },
          {
            id: "2",
            title: "Foto de um gato",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Gatos" },
              { id: "2", title: "Cachorro" },
              { id: "3", title: "Papagaio" },
            ],
          },
        ]}
      />
    </Container>
  );
}
