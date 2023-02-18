import create from "zustand";
import axios from "axios"


const useNewsStore = create((set) => ({
    newsData: "",
    setNewsData: (value) => set({ newsData: value }),
}));

// Get All News
export const getAllNews = async () => {

    const { setNewsData } = useNewsStore.getState();

    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log("getALlFaq response data: ", res.data);
        if (res.data) {
            setNewsData(res.data);
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
};

export default useNewsStore;
