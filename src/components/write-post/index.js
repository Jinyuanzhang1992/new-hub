import {
  FloatingLabel,
  Form,
  Container,
  Row,
  Col,
  Button,
} from "../../utils/imports";
import "./write-post.scss";
import { useState } from "react";
import Ajv from "ajv";
import ajvErrors from "ajv-errors";

//写一个schema对象，用来校验表单数据
const schema = {
  type: "object",
  properties: {
    title: {
      type: "string",
      minLength: 2,
      maxLength: 32,
      errorMessage: {
        type: "Title must be String.",
        minLength: "Title must no less than 2 characters.",
        maxLength: "Title must no more than 32 characters.",
      },
    },
    content: {
      type: "string",
      minLength: 1,
      maxLength: 1000,
      errorMessage: {
        type: "Content must be String.",
        minLength: "Content must no less than 1 characters.",
        maxLength: "Content must no more than 1000 characters.",
      },
    },
  },
};

//创建一个ajv实例
const ajv = new Ajv({ allErrors: true, jsonPointers: true });
ajvErrors(ajv);
const validate = ajv.compile(schema);

function WritePost() {
  const [errors, setErrors] = useState({});
  const [postDetail, setPostDetail] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    console.log("change");
    //step-1 获取用户输入的数据
    const { name, value } = e.target;
    //e.target指的是触发事件的元素，这里指的是表单元素
    console.log("name: ", name);
    console.log("value: ", value);

    //step-2 更新state
    setPostDetail({
      ...postDetail,
      [name]: value,
    });
    //这里的name是表单元素的name属性，value是表单元素的value属性
    //展开运算符...postDetail，是把postDetail对象里面的所有属性展开，然后再把[name]:value添加进去
    //同名属性会被覆盖，不同名属性会被添加
  };

  const handleSubmit = (e) => {
    //e指的是事件对象
    // step-1 阻止表单默认提交行为
    e.preventDefault();

    // step-2 获取表单数据
    console.log("postDetail: ", postDetail);

    // step-3 数据校验（minlength,maxlength,text,number,regExp）
    //使用ajv.js库来校验表单数据
    const isValid = validate(postDetail);
    //清空错误信息
    setErrors({});

    if (!isValid) {
      const newErrors = {};
      validate?.errors.forEach((error) => {
        console.log("error: ", error);
        //error是 ajv 返回的错误信息对象，包含了错误信息，instancePath 是错误的字段名（是 title 出错了还是 content 出错了，还是都出错了），message 是错误信息，就是 schema 中 errorMessage 的内容。比如minLength，maxLength后面的内容
        const key = error.instancePath.substring(1);
        newErrors[key] = error.message;
        //以字段名为key，错误信息为value，存入newErrors对象
        console.log("key: ", key);
        console.log("message: ", error.message);
      });
      setErrors(newErrors);
      console.log("errors: ", errors);
      return;
    }

    // step-4 提交数据
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={12}>
          <Form noValidate onSubmit={handleSubmit}>
            {/* onSubmit={handleSubmit} */}
            {/* noValidate 属性规定在提交表单时不对其进行验证。禁用表单校验功能，后续交给Bootstrap去管 */}
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your Title, 2-32 characters."
              className="mb-3"
            >
              <Form.Control
                name="title"
                type="text"
                placeholder="Leave a comment here"
                value={postDetail.title}
                // 把表单数据绑定到state中，相当于把表单数据变成了state数据，交给React控制
                onChange={handleChange}
                className={`${errors.title ? "is-invalid" : ""}`}
                // 如果errors.title存在，就添加类名is-invalid，显示错误信息,显示红色边框
              />
              {errors.title && (
                <span className="text-danger">{errors.title}</span>
                // 如果errors.title存在，就显示错误信息
              )}
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Enter your Contents, 1-1000 characters."
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "20rem" }}
                name="content"
                value={postDetail.content}
                // 把表单数据绑定到state中，相当于把表单数据变成了state数据，交给React控制，设置了 value 属性需要设置 onChange 属性，用来更新 state 中的数据
                onChange={handleChange}
                className={`no-resize ${errors.content ? "is-invalid" : ""}`}
              />
              {errors.content && (
                <span className="text-danger">{errors.content}</span>
                // 如果errors.content存在，就显示错误信息
              )}
            </FloatingLabel>
            <Button
              as="input"
              type="submit"
              value="Submit"
              className="mb-3 mt-3"
              // onClick={validateForm}
              // onClick={validateForm} 用来校验表单数据，点击按钮时触发，如果返回 false，不会触发表单的提交事件，即不会触发 handleSubmit
            />{" "}
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WritePost;
