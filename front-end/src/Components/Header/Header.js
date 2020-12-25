import React from 'react';
import './Header.css';
import Avatar from "@material-ui/core/Avatar"

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://scontent.ford4-1.fna.fbcdn.net/v/t1.0-9/131384144_3651395521604010_4212904248680225796_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=_oRP5gCRtMoAX8TUqad&_nc_oc=AQk1G4FZCiKvVZZxJP8KaJMXviLPD3LqLXzDbjJxl4bKmaDoY0bwnX15WkgAxjVp5vM&_nc_ht=scontent.ford4-1.fna&oh=6cdb3eb8be9467475f5d2a005d377664&oe=600A62C5" alt="Logo"/>
            </div>
            <div className="header__right">
                <Avatar />
            </div>
        </div>
    )
}

export default Header
