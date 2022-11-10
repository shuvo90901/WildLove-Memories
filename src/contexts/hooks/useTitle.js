import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - WildLove Memories`
    }, [title])
}

export default useTitle;