import { useState } from "react";
import axios from "axios";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  Space,
  Typography,
  message,
  //   Flex,
} from "antd";
import { useItemStore } from "@/store/useItemStore";
const { Title } = Typography;
interface ItemData {
  name: string;
  price: number;
  description?: string;
}

interface CreateItemProps {
  onClose?: () => void;
}

const CreateItem: React.FC<CreateItemProps> = ({ onClose }) => {
  const addItem = useItemStore((state) => state.addItem);
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();

  const onFinish = async (values: ItemData) => {
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/items/", values);
      message.success(response.data.message);
      form.resetFields();
      addItem(response.data.data);
    } catch (error) {
      console.error(error);
      message.error("Помилка при відправці запиту");
    } finally {
      setLoading(false);
      if (onClose) {
        onClose();
      }
    }
  };
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center p-6">
      <Space orientation="vertical" size="large" className="w-full max-w-md">
        <div className="text-center">
          <Title level={3} className="text-gray-500">
            Create a new item
          </Title>
        </div>

        <Card className="shadow-md border-none">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Product name"
              name="name"
              rules={[{ required: true, message: "Please enter a name!" }]}
            >
              <Input placeholder="For example: MacBook Pro" size="large" />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
            >
              <Space.Compact className="w-full">
                <InputNumber className="w-full" min={0} placeholder="999.99" />
                <span className="ant-input-group-addon px-3 bg-gray-50 border border-l-0 border-gray-300 flex items-center">
                  ₴
                </span>
              </Space.Compact>
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input.TextArea
                placeholder="Additional information..."
                rows={3}
              />
            </Form.Item>
            <Form.Item className="mb-0">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                loading={loading}
                className="bg-[#1677ff]"
              >
                Send to server
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};

export default CreateItem;
