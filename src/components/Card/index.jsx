export const Card = ({ timeA, timeB, match }) => (
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
    <span className="text-sm md:text-base text-gray-700 font-bold">{ match.time }</span>
    <div className="flex space-x-4 justify-center items-center">
        <span className="uppercase">{timeA.slug}</span>
        <img src={`/imgs/flags/${timeA.slug}.png`} />
    
        <input min={0} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center" />

        <span>X</span>
        <input min={0} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl text-center" />

        <img src={`/imgs/flags/${timeB.slug}.png`} />
        <span className="uppercase">{timeB.slug}</span>   
    </div>
</div>
)