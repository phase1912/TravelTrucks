export default function Gallery({ images = [] }: { images?: string[] }) {
    if (!images?.length) return null;
    return (
        <div className="grid grid-3">
            {images.map((src, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: 'hidden', height: 160, background: '#e5e7eb' }}>
                    <img src={src} alt={`photo ${i + 1}`}
                         style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
            ))}
        </div>
    );
}
