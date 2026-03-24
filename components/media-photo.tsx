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
        "overflow-hidden bg-[#cda63f] bg-cover bg-center bg-no-repeat",
        className,
      ].join(" ")}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div
        aria-hidden="true"
        className={[
          "h-full w-full bg-[linear-gradient(180deg,rgba(17,44,68,0.18),rgba(17,44,68,0.08)_32%,rgba(17,44,68,0.22)_100%)]",
          overlayClassName,
        ].join(" ")}
      />
    </div>
  );
}
