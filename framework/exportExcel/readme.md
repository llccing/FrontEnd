# Excel文件导出

做一个住房保障大数据平台（管理系统），其中涉及一个Excel文件导出的功能，原本打算前台选中导出，
实践过程中发觉用bootstrap-table做导出要额外引入两个js文件。
一个是 bootstrap-table-expor.js，这个是bootstrap-table作者写的。
一个是 tableExport.js，这个是导出table中数据的封装好的工具库。
第一个js文件调用第二个js文件，从而实现table数据的导出。

后期由于数据较多，可能涉及上万条，而前台导出只能是看的见的数据的导出，
在分页的情况下，不能导出没有看的到的数据