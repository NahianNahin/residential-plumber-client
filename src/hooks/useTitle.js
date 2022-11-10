import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -- Residential Plumber`;
    },[title])
}

export default useTitle;