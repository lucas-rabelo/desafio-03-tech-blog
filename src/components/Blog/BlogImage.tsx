type BlogImageProps = {
    bgImage: string;
    bgImageAlt: string;
}

export function BlogImage({ bgImage, bgImageAlt }: BlogImageProps) {
    return(
        <img src={bgImage} alt={bgImageAlt} />
    );
}