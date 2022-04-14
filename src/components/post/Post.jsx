import { MoreVert } from '@mui/icons-material';
import './post.css';

export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/person/1.jpeg" alt="" />
                        <span className='postUsername'>Raj Tiwari</span>
                        <span className='postDate'>5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! this is my firt post</span>
                    <img className='postImg' src="assets/post/1.jpeg" alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/like.png" alt="" className="likeIcon" />
                        <img src="assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">35 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
