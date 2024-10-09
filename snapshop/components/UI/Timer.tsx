import formatTime from '@/utils/formatTime';

interface TimerCircleProps {
  time: number;
  unit: string;
  lastItem?: boolean;
  circular?: boolean;
}

const Timer: React.FC<TimerCircleProps> = ({
  time,
  unit,
  lastItem = false,
  circular = false,
}) => {
  return (
    <>
      {!circular && (
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center min-w-7 md:min-w-14">
            <span className="text-[8px] md:text-[11px] font-semibold text-gray-900">
              {unit}
            </span>
            <span className="font-semibold text-xl md:text-3xl">
              {formatTime(time)}
            </span>
          </div>
          {!lastItem && (
            <span className="text-red-500 font-semibold text-xl md:text-3xl mt-8 md:mt-7">
              :
            </span>
          )}
        </div>
      )}
      {circular && (
        <div className="flex flex-col items-center bg-white text-black p-2 md:p-4 rounded-full w-12 md:w-16 h-12 md:h-16">
          <div className="text-xs md:text-sm font-semibold">
            {formatTime(time)}
          </div>
          <div className="text-[10px] md:text-xs">{unit}</div>
        </div>
      )}
    </>
  );
};

export default Timer;
