import { useEffect, useState } from "react";

export default function Github() {
    const [followers, setFollowers] = useState([]);
    const [followers_url, setFollowers_url] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/kkv123")
            .then((res) => res.json())
            .then((data) => {
                setFollowers(data.followers);
                setFollowers_url(data.avatar_url);
            });
        console.log(followers_url);
    }, []);
    return (
        <div className="mx-auto   w-full max-w-7xl h-[40vh] flex flex-row  items-center mt-20 mb-20">
            <img className="border-12 rounded-3xl  h-[100%] ml-[20vw]" src={followers_url} alt="kuldeep" />
            <div className="ml-[5vw]">
                <h1 className="text-center text-2xl sm:text-5xl p-10 font-medium">Github Page</h1>
                <p className="text-center text-xl font-bold text-lg">Followers: {followers}</p>
            </div>

        </div>
    );

}