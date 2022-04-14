import './sidebar.css';
import { Bookmark, Chat, Event, HelpOutline, RssFeed, School, Videocam, WorkOutline } from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className="sidebarListItem">
            <Videocam className="sidebarIcon" />
            <span className='sidebarListItemText'>Video</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className='sidebarListItemText'>Question</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
          <li className="sidebarFriend">
            <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
           <span className='sidebarFriendName'>Rahul</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
