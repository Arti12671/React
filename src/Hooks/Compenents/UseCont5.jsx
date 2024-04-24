import React from 'react'
import { ChannelContext, UserContext } from './UseCont1'

const UseCont5 = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    (user) => {
                        return <ChannelContext.Consumer>
                            {
                                (channel) => {
                                    return <h1>My Name Is {user} And Channel Name is {channel}</h1>
                                }
                            }
                        </ChannelContext.Consumer>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default UseCont5