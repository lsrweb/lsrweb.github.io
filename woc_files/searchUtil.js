
// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (searchUtil == null) var searchUtil = {};
searchUtil._path = '/xgxt/dwr';
searchUtil.getGyglInfo = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getGyglInfo', p0, p1, p2, p3, p4, p5, p6, p7, callback);
}
searchUtil.getZyInfoByPy = function(p0, p1, p2, p3, p4, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getZyInfoByPy', p0, p1, p2, p3, p4, callback);
}
searchUtil.getZyInfoByXy = function(p0, p1, p2, p3, p4, p5, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getZyInfoByXy', p0, p1, p2, p3, p4, p5, callback);
}
searchUtil.getBjInfoByTj = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getBjInfoByTj', p0, p1, p2, p3, p4, p5, p6, p7, callback);
}
searchUtil.getQsInfoByPy = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getQsInfoByPy', p0, p1, p2, p3, p4, p5, p6, p7, callback);
}
searchUtil.getBmpy = function(p0, p1, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getBmpy', p0, p1, callback);
}
searchUtil.getGyglInfo_Third = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getGyglInfo_Third', p0, p1, p2, p3, p4, p5, p6, p7, callback);
}
searchUtil.getQsInfoByPy_Third = function(p0, p1, p2, p3, p4, p5, p6, p7, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getQsInfoByPy_Third', p0, p1, p2, p3, p4, p5, p6, p7, callback);
}
searchUtil.getZyNewInfoByPy = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getZyNewInfoByPy', p0, p1, p2, p3, callback);
}
searchUtil.getBjNewInfoByTj = function(p0, p1, p2, p3, p4, p5, p6, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getBjNewInfoByTj', p0, p1, p2, p3, p4, p5, p6, callback);
}
searchUtil.getXmInfoByTj = function(p0, p1, p2, callback) {
  dwr.engine._execute(searchUtil._path, 'searchUtil', 'getXmInfoByTj', p0, p1, p2, callback);
}
