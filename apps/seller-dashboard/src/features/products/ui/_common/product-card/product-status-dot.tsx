export default function ProductStatusDot({
    className,
    isPublished,
}: {
    className?: string;
    isPublished: boolean;
}) {
    return (
        <div
            className={[
                "w-[12px] h-[12px] rounded-full border-2 border-background border-solid",
                isPublished ? "bg-green" : "bg-gray-500",
                className,
            ].join(" ")}
        />
    );
}
