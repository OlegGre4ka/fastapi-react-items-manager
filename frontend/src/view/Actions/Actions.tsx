import React from "react";
import { Flex, Button, Typography, App as AntApp } from "antd";
import CreateItem from "@/components/forms/CreateItem";

const { Title } = Typography;

const Actions: React.FC = () => {
  const { modal } = AntApp.useApp();

  const createNewItem = () => {
    const instance = modal.confirm({
      title: "Add a product via POST-> Pythom Fast API",
      content: <CreateItem onClose={() => instance.destroy()} />,
      footer: null,
      closable: true,
      maskClosable: true,
      width: 500,
      icon: null,
    });
  };

  const handleRefresh = () => {
    console.log("Fetch logic here");
  };

  return (
    <Flex
      vertical
      align="center"
      className="w-75 bg-slate-100 p-6! gap-4 border-r border-gray-200 rounded-sm"
    >
      <Title level={4} className="mb-6">
        Actions
      </Title>
      <Button
        type="primary"
        onClick={createNewItem}
        className="w-full h-12 text-lg bg-cyan-700! hover:bg-cyan-600! border-none!"
      >
        Create Item
      </Button>
      <Button className="w-full h-12 text-lg" onClick={handleRefresh}>
        Refresh List
      </Button>
    </Flex>
  );
};

export default Actions;
