import Lottie from "react-lottie";
import animationData from "../../assets/lotties/loading.json"

export function Loading({ size }) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Lottie
            options={defaultOptions}
            width={size}
            isClickToPauseDisabled={true}
        />
    );
}