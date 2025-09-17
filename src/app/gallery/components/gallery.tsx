import LightBox from "components/LightBox";

export default function GalleryComponent() {
  return (
    <>
      <LightBox />

      <a href="#" data-glightbox data-gallery="g1">
        Link
      </a>

      <a href="#" data-glightbox="title: Title; description: Description" data-gallery="g1">
        Link
      </a>

      <a href="#" data-glightbox="title: Title; description: .caption1" data-gallery="g1">
        Link
      </a>

      <div className="glightbox-desc caption1">
        <p className="mb-0">This div will be used as the image description. HTML is supported.</p>
      </div>
    </>
  );
}