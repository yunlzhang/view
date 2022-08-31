// 防抖节流 hooks方式写法

export function useDebounce(fn,delay,dep = []){
    const {current} = useRef({fn, timer: null});
    useEffect(() => {
        current.fn = fn;
    }, [fn]);
    return useCallback((...args) => {
        if(current.timer){
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args);
        }, delay);

    }, dep);  
}


export function useThrottle(fn, delay, dep){
    const {current} = useRef({fn, timer: null});
    useEffect(() => {
        current.fn = fn;
    }, [fn]);
    return useCallback((...args) => {
        if(!current.timer) {
            current.timer = setTimeout(() => {
                delete current.timer;
            },delay);
            current.fn.call(this, ...args)
        }
    }, dep)
}