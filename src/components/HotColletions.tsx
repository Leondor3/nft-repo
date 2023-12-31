import { Title } from ".";
import { CardsHots } from "./Cards";

export function HotColletions() {
    return (
        <section className="relative py-32 border-t border-zinc-800" id="colletions">
            <div className="container">
                <div className="text-center">
                    <Title size="xl" color="white" weight="bold" className='max-sm:text-4xl'>🔥 Hot Colletions</Title>
                    <div className="pt-16">
                        <CardsHots />
                    </div>
                </div>
            </div>
        </section>
    )
}