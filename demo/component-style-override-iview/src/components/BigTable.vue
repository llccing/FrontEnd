<template>
  <div :class="wrapClasses" :style="styles">
        <div :class="classes">
            <div :class="[prefixCls + '-title']" v-if="showSlotHeader" ref="title"><slot name="header"></slot></div>
            <div :class="[prefixCls + '-header']" v-if="showHeader" ref="header" @mousewheel="handleMouseWheel">
                <table-head
                    :prefix-cls="prefixCls"
                    :styleObject="tableHeaderStyle"
                    :columns="cloneColumns"
                    :column-rows="columnRows"
                    :obj-data="objData"
                    :columns-width="columnsWidth"
                    :data="rebuildData"></table-head>
            </div>
            <div :class="[prefixCls + '-body']" :style="bodyStyle" ref="body" @scroll="handleBodyScroll"
                v-show="!((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table-body
                    ref="tbody"
                    :prefix-cls="prefixCls"
                    :styleObject="tableStyle"
                    :columns="cloneColumns"
                    :data="rebuildData"
                    :columns-width="columnsWidth"
                    :obj-data="objData"></table-body>
            </div>
            <div
                :class="[prefixCls + '-tip']" :style="bodyStyle" @scroll="handleBodyScroll"
                v-show="((!!localeNoDataText && (!data || data.length === 0)) || (!!localeNoFilteredDataText && (!rebuildData || rebuildData.length === 0)))">
                <table cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td :style="{'height':bodyStyle.height,'width':`${this.headerWidth}px`}">
                                <span v-html="localeNoDataText" v-if="!data || data.length === 0"></span>
                                <span v-html="localeNoFilteredDataText" v-else></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div :class="[prefixCls + '-fixed']" :style="fixedTableStyle" v-if="isLeftFixed">
                <div :class="fixedHeaderClasses" v-if="showHeader">
                    <table-head
                        fixed="left"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :column-rows="columnRows"
                        :fixed-column-rows="leftFixedColumnRows"
                        :obj-data="objData"
                        :columns-width="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedBody" @mousewheel="handleFixedMousewheel" @DOMMouseScroll="handleFixedMousewheel">
                    <table-body
                        fixed="left"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedTableStyle"
                        :columns="leftFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div :class="[prefixCls + '-fixed-right']" :style="fixedRightTableStyle" v-if="isRightFixed">
                <div :class="fixedHeaderClasses" v-if="showHeader">
                    <table-head
                        fixed="right"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :column-rows="columnRows"
                        :fixed-column-rows="rightFixedColumnRows"
                        :obj-data="objData"
                        :columns-width="columnsWidth"
                        :data="rebuildData"></table-head>
                </div>
                <div :class="[prefixCls + '-fixed-body']" :style="fixedBodyStyle" ref="fixedRightBody" @mousewheel="handleFixedMousewheel" @DOMMouseScroll="handleFixedMousewheel">
                    <table-body
                        fixed="right"
                        :prefix-cls="prefixCls"
                        :styleObject="fixedRightTableStyle"
                        :columns="rightFixedColumns"
                        :data="rebuildData"
                        :columns-width="columnsWidth"
                        :obj-data="objData"></table-body>
                </div>
            </div>
            <div :class="[prefixCls + '-fixed-right-header']" :style="fixedRightHeaderStyle" v-if="isRightFixed"></div>
            <div :class="[prefixCls + '-footer']" v-if="showSlotFooter" ref="footer"><slot name="footer"></slot></div>
        </div>
        <Spin fix size="large" v-if="loading">
            <slot name="loading"></slot>
        </Spin>
    </div>
</template>
<script>
import {Table} from 'iview'
export default {
  mixins:[Table],
    mounted () {
        console.log('do what you want to do in mounted!')
    },
}
</script>
