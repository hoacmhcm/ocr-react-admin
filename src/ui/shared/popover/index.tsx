import React from 'react';

import { Form, Popover } from 'antd';
import Button from 'antd-button-color';

import FormBuilder from '../forms';
import { IMetaFormBuilder } from '../forms/FormBuilder/FormBuilder';

import useDialog from '../../../hooks/useDialog';
import useForm from '../../../hooks/useForm';
import { asyncAction } from '../../../utils';

import './style.less';

interface BasePopoverProps {
  id?: string;
  title: string;
  trigger?: 'click' | 'hover';
  meta?: IMetaFormBuilder;
  formProps?: any;
  btnAction: React.ReactNode;
  onOkFn: (value: any, id?: any) => Promise<any>;
}

const BasePopover: React.FC<BasePopoverProps> = ({
  id,
  title,
  trigger = 'click',
  meta,
  formProps,
  btnAction,
  onOkFn,
  ...restProps
}) => {
  const [form] = Form.useForm();
  const [visible, { handleClose, handleOpen, handleToggle }] = useDialog();

  const handleOkBtn = (values: any): Promise<any> => {
    return asyncAction(title, () => {
      return onOkFn(values).then((resp) => {
        // if (isMounted()) {
        //     setCloseDialog();
        // }
        handleClose();
        return resp;
      });
    });
  };

  const { handleSubmit } = useForm(form, handleOkBtn);

  const renderContent = () => {
    return (
      <>
        <Form form={form} {...formProps}>
          <FormBuilder meta={meta} />
        </Form>
        <Button type="primary" style={{ width: '100%' }} onClick={handleSubmit}>
          Apply
        </Button>
      </>
    );
  };

  return (
    <Popover
      id={id}
      content={renderContent()}
      overlayClassName="base-popover-overlay"
      title={title}
      trigger={trigger}
      open={visible}
      onOpenChange={handleToggle}
      placement="bottomLeft"
      {...restProps}
    >
      {btnAction}
    </Popover>
  );
};

export default BasePopover;
