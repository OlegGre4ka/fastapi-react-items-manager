// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from "react";
import "./App.css";
import { Card, Flex, Typography, Empty } from "antd";
import Actions from "@/view/Actions/Actions";

import { useItemStore } from "@/store/useItemStore";
const { Title, Text } = Typography;

function App() {
  const items = useItemStore((state) => state.items);

  return (
    <Flex justify="space-between" className="w-full p-8! min-h-screen">
      {/* LEFT SIDEBAR: Controls */}
      <Actions />
      {/* RIGHT SIDE: Data Display Area */}
      <Flex vertical className="flex-1 p-8 bg-white">
        <Flex justify="center" className="w-full">
          <Title level={3}>Stored Items</Title>
        </Flex>

        <Flex justify="center" className="mt-4 p-8 w-full!">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 m-6 w-full!">
              {items.map((item, index) => (
                <Card key={index} hoverable className="shadow-sm w-min-80!">
                  <Flex vertical gap={2}>
                    <Flex justify="space-between" className="w-full">
                      <Title level={5} className="m-0">
                        {item.name}
                      </Title>
                      <Text strong className="text-xl text-cyan-700">
                        {item.price} ₴
                      </Text>
                    </Flex>

                    <Text type="secondary">
                      {item.description || "No description provided."}
                    </Text>
                  </Flex>
                </Card>
              ))}
            </div>
          ) : (
            <Flex
              align="center"
              justify="center"
              className="h-64 border-2 border-dashed border-gray-200 rounded-xl"
            >
              <Empty
                description={
                  <Text type="secondary" className="text-lg">
                    No data available to display at the moment
                  </Text>
                }
              />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
