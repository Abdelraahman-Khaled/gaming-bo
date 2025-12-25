import React from "react";
import { getGenres } from "@/app/api/api";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/app/components/Heading";
import MotionItem from "@/app/components/defaults/MotionItem";

interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

const CategoryPage = async () => {
    const genres = await getGenres();

    return (
        <section className="py-8">
            <Heading text="Browse by Category" />
            <p className="text-gray-400 mt-2 mb-8">Explore games by genre</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {genres.results?.map((genre: Genre, index: number) => (
                    <MotionItem
                        key={genre.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href={`/games?genre=${genre.id}`}
                            className="group relative block overflow-hidden rounded-2xl bg-main border border-input hover:border-rose-500 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                                <Image
                                    src={genre.image_background}
                                    alt={genre.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                                    {genre.name}
                                </h3>
                                <p className="text-gray-300 text-xs md:text-sm">
                                    {genre.games_count.toLocaleString()} games
                                </p>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-rose-500/0 group-hover:bg-rose-500/10 transition-colors duration-300" />
                        </Link>
                    </MotionItem>
                ))}
            </div>
        </section>
    );
};

export default CategoryPage;
