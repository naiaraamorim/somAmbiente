import { ArrowUturnLeftIcon, PauseIcon, PlayIcon } from "@heroicons/react/24/outline";

export const Pomodoro = () => {
    return(
        <div className="w-full flex-col flex items-center p-6 gap-5">
            <div className="flex">
                <span className="bg-zinc-950 bg-opacity-50 p-4 rounded-xl text-white font-semibold text-4xl">25:00</span>
            </div>
            <div className="flex gap-10">
                <PlayIcon className="w-8 text-white cursor-pointer"/>
                <PauseIcon className="w-8 text-white cursor-pointer"/>
                <ArrowUturnLeftIcon className="w-8 text-white cursor-pointer"/>
            </div>
        </div>
    );
}