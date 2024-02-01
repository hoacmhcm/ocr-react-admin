import React, { useCallback } from 'react';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Form } from 'antd';

import FormBuilder from './FormBuilder';

import { debounce } from '../../../utils';
import logger from '../../../utils/logger';

type BaseFilterProps = {
  loading: boolean;
  onFilter: (...args) => void;
  normalizeFn?: (...args) => void;
  meta: any;
  filterOnChange?: boolean;
  showSubmitButton?: boolean;
  showResetButton?: boolean;
};

const BaseFilter: React.FC<BaseFilterProps> = (props) => {
  const {
    loading,
    onFilter,
    normalizeFn,
    meta,
    filterOnChange,
    showSubmitButton = true,
    showResetButton = true,
  } = props;
  const [form] = Form.useForm();

  const _filterOnChange = !showSubmitButton || filterOnChange;

  const handleChange = useCallback((values) => {
    const submitFilter = normalizeFn ? normalizeFn(values) : values;
    logger.info('submitFilter', values);
    logger.info('submitFilter', submitFilter);
    onFilter(submitFilter);
  }, []);

  const handleFieldsChange = debounce(() => {
    const values = form.getFieldsValue();
    const fieldsError = form.getFieldsError();
    const hasError = fieldsError.some((field) => field.errors.length);

    const submitFilter = normalizeFn ? normalizeFn(values) : values;
    logger.info('submitFilter', values);
    logger.info('submitFilter', submitFilter);
    if (!hasError) {
      onFilter(submitFilter);
    }
  }, 200);


  function reset() {
    form.resetFields();
    handleChange(meta.initialValues);
  }

  return (
    <Form
      layout="inline"
      style={{ marginBottom: '24px', gap: '12px 0' }}
      initialValues={meta.initialValues}
      form={form}
      onFinish={handleChange}
      onFieldsChange={_filterOnChange ? handleFieldsChange : undefined}
    >
      <FormBuilder meta={meta} form={form} />
      {showSubmitButton && (
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            icon={<SearchOutlined />}
            loading={loading}
          >
            Search
          </Button>
        </Form.Item>
      )}
      {showResetButton && (
        <Form.Item
          style={{
            display: 'flex',
            alignSelf: 'end',
            height: '100%',
          }}
        >
          <Button type="primary" onClick={reset}>
            Reset
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default BaseFilter;
