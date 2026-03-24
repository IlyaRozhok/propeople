type MediaPhotoProps = {
  src: string;
  alt: string;
  className?: string;
  overlayClassName?: string;
};

export function MediaPhoto({
  src,
  alt,
  className = "",
  overlayClassName = "",
}: MediaPhotoProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={[
        "overflow-hidden bg-accent bg-cover bg-center bg-no-repeat",
        className,
      ].join(" ")}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div
        aria-hidden="true"
        className={[
          "h-full w-full bg-[linear-gradient(180deg,rgba(20,20,20,0.12),rgba(20,20,20,0.06)_32%,rgba(20,20,20,0.18)_100%)]",
          overlayClassName,
        ].join(" ")}
      />
    </div>
  );
}
