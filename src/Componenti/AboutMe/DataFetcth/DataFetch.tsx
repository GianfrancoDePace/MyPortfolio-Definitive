import { useState, useEffect } from 'react';
import "./DataFetch.css";
 
const DataFetch = () => {
 
    const [repoCount, setRepoCount] = useState<number | null>(null);
    const [gistCount, setGistCount] = useState<number | null>(null);
    const [followerCount, setFollowerCount] = useState<number | null>(null);
    const [followingCount, setFollowingCount] = useState<number | null>(null);
 
    const fetchData = async() => {
        fetch("https://api.github.com/users/GianfrancoDePace")
            .then(response => response.json())
            .then((data) => {
                setRepoCount(data.public_repos);
                setGistCount(data.public_gists);
                setFollowerCount(data.followers);
                setFollowingCount(data.following);
            });
    };
 
    useEffect(() => {
        fetchData();
    }, []);
 
    return (
        <div>
            {repoCount !== null && gistCount !== null && followerCount !== null && followingCount !== null ? (
                <div>
                    <p>Number of Public Repos: {repoCount}</p>
                    <p>Number of Public Gists: {gistCount}</p>
                    <p>Follower: {followerCount}</p>
                    <p>Following: {followingCount}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}  
        </div>
    );
};
 
export default DataFetch;
 
