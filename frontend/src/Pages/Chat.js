import React, { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProv";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../utils/SideDrawer";
import MyChat from "../components/chat/MyChat";
import ChatBox from "../components/chat/ChatBox";
function Chat() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {/* sidebar */}
      {user && <SideDrawer></SideDrawer>}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {/* chats */}
        {user && <MyChat fetchAgain={fetchAgain} />}
        {/* chatBox */}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
}

export default Chat;
