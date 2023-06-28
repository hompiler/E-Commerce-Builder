import React from "react";
import { Empty, Spin, Table as AntTable } from "antd";
import IconButton from "@components/buttons/IconButton";

export const TableActionStates = {
    isSelecting: "isSelecting",
    noSelection: "noSelection",
};

export default function Table({
    selection,
    selectedRows,
    setSelectedRows,
    setSelectedRecords,
    rowKey,
    emptyPlaceholder,
    onRowClick,
    rowLink,
    unselectableRowsCondition,
    columns,
    actions,
    ...props
}: TableProps) {
    actions = actions ?? [];
    const fullColumns: Array<TableColumn> = columns.concat(
        actions.length > 0
            ? [
                  {
                      title: "",
                      render: (_, row) => {
                          return (
                              <div className="action flex justify-end  gap-2 ">
                                  {actions?.map((action, i) => (
                                      <IconButton
                                          className="tableButton tableButton"
                                          key={i}
                                          onClick={(e: any) =>
                                              action.onClick?.(row, e)
                                          }
                                      >
                                          {action.icon}
                                      </IconButton>
                                  ))}
                              </div>
                          );
                      },
                  },
              ]
            : []
    );

    const onSelect = (record: any, selected: boolean) => {
        selectedRows = selectedRows ?? [];
        if (selected) {
            if (selection === "radio") {
                setSelectedRows?.([record.id]);
                setSelectedRecords?.([record]);
            } else {
                setSelectedRows?.([...selectedRows, record.id]);
                setSelectedRecords?.([...selectedRows, record]);
            }
        } else {
            const index = selectedRows.indexOf(record.id);
            setSelectedRows?.([
                ...selectedRows.slice(0, index),
                ...selectedRows.slice(index + 1),
            ]);
            setSelectedRecords?.([
                ...selectedRows.slice(0, index),
                ...selectedRows.slice(index + 1),
            ]);
        }
    };

    const onSelectAll = (selected: boolean) => {
        const all = unselectableRowsCondition
            ? props.dataSource
                  .filter((record) => !unselectableRowsCondition(record))
                  .map((it) => it.id)
            : props.dataSource.map((it) => it.id);
        if (selected) {
            setSelectedRows?.(all);
            setSelectedRecords?.(props.dataSource);
        } else {
            setSelectedRows?.([]);
            setSelectedRecords?.([]);
        }
    };
    return (
        <div
            className={`tableContainer ${
                props.disableHeaders ? "disableHeaders" : ""
            }`}
        >
            <AntTable
                // @ts-ignore
                preserveSelectedRowKeys
                {...props}
                pagination={{
                    ...props.pagination,
                }}
                locale={{
                    emptyText: !props.loading && (
                        <div className="table-empty-placeholder">
                            {emptyPlaceholder ?? (
                                <div>
                                    <Empty />
                                    <div>{"Empty"}</div>
                                </div>
                            )}
                        </div>
                    ),
                }}
                rowSelection={
                    selection
                        ? {
                              selectedRowKeys: selectedRows,
                              type:
                                  selection === "radio" ? "radio" : "checkbox",
                              fixed: true,
                              getCheckboxProps: (record) => ({
                                  disabled:
                                      unselectableRowsCondition?.(record) ??
                                      false,
                              }),
                              onSelect,
                              onSelectAll,
                          }
                        : undefined
                }
                rowKey={rowKey ?? ((record) => record.id)}
                loading={{
                    spinning: props.loading ?? false,
                    indicator: (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Spin />
                        </div>
                    ),
                }}
                columns={fullColumns}
            />
        </div>
    );
}

export interface TableColumn<T = any> {
    title: string;
    dataIndex?: string;
    render?: (value: any, record: T, index: number) => React.ReactNode;
    width?: number;
}

interface TableProps {
    dataSource: Array<any>;
    columns: Array<TableColumn>;
    onSearch?: (value: string) => void;
    disableHeaders?: boolean;
    emptyPlaceholder?: React.ReactNode;
    selection?: "radio" | "checkbox";
    selectedRows?: Array<any>;
    setSelectedRows?: (value: Array<any>) => void;
    setSelectedRecords?: (value: Array<any>) => void;
    rowKey?: (record: any) => string;
    onRowClick?: (record: any, e: any) => void;
    pagination?: {
        current: number;
        pageSize: number;
        onPageChange: (page: number, pageSize: number) => void;
        total: number;
    };
    searchPlaceholder?: string;
    unselectableRowsCondition?: (record: any) => boolean;
    actions?: Array<{
        title: string;
        icon: React.ReactNode;
        onClick: (record: any, e: any) => void;
    }>;
    loading?: boolean;
    rowLink?: (record: any) => string;
}
