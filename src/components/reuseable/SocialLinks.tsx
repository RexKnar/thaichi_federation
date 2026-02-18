// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 2, icon: "uil uil-facebook-f", url: "https://www.facebook.com/taichifederationofindia/" },
  { id: 4, icon: "uil uil-instagram", url: "https://www.instagram.com/taichifederationofindia" },
  { id: 5, icon: "uil uil-youtube", url: " https://www.youtube.com/@taichifederationofindia" }
];

export default function SocialLinks({ className = "nav social social-white mt-4" }: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
}
