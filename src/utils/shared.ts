'use strict';

export enum UserStatus {
  SignedIn = 1,
  SignedOut = 2
}

export enum Languages {
  'Auto' = 0,
  'Pascal' = 1,
  'C' = 2,
  'C++14 (GCC 9)' = 28,
  'C++98' = 3,
  'C++11' = 4,
  'C++14' = 11,
  'C++17' = 12,
  'C++20' = 27,
  // 'Python 2' = 6,
  'Python 3' = 7,
  'Java 8' = 8,
  'Node.js LTS' = 9,
  'Go' = 14,
  'Ruby' = 13,
  'Rust' = 15,
  'PHP' = 16,
  'C# Mono' = 17,
  // 'VisualBasic' = 18,
  'Haskell' = 19,
  // 'Kotlin/Native' = 20,
  'Kotlin/JVM' = 21,
  'Scala' = 22,
  'Perl' = 23,
  // 'PyPy2' = 24,
  'PyPy3' = 25,
  // '文言' = 26
}

export enum ProblemState {
  'Waiting' = 0,
  'Judging' = 1,
  'Compile Error' = 2,
  'OLE' = 3,
  'MLE' = 4,
  'TLE' = 5,
  'WA' = 6,
  'RE' = 7,
  'Accepted' = 12,
  'Unaccepted' = 14,
  'Hack Success' = 21,
  'Hack Failure' = 22,
  'Hack Skipped' = 23
}

export const fileExtention = {
  'pas': 'pascal',
  'pp': 'pascal',
  'lpr': 'pascal',
  'dpr': 'pascal',
  'c': 'c',
  'cpp': 'cpp',
  'cxx': 'cpp',
  'cc': 'cpp',
  'c++': 'cpp',
  'C': 'cpp',
  'py': 'python',
  'java': 'java',
  'js': 'nodejs',
  'go': 'go',
  'ruby': 'ruby',
  'rust': 'rust',
  'php': 'php',
  'cs': 'c#',
  'vb': 'vb',
  'vbs': 'vb',
  'hs': 'haskell',
  'kt': 'kotlin',
  'scala': 'scala',
  'perl': 'perl',
  'wy': 'wy'
}

export const languageList = {
  'pascal': ['Pascal'],
  'c': ['C'],
  'cpp': ['C++14 (GCC 9)', 'C++98', 'C++11', 'C++14', 'C++17', 'C++20'],
  'python': [/* 'Python 2', */ 'Python 3', /* 'PyPy2', */ 'PyPy3'],
  'java': ['Java 8'],
  'nodejs': 'Node.js LTS',
  'go': ['Go'],
  'ruby': ['Ruby'],
  'rust': ['Rust'],
  'php': ['PHP'],
  'c#': ['C# Mono'],
  // 'vb': ['VisualBasic'],
  'haskell': ['Haskell'],
  'kotlin': [/* 'Kotlin/Native',*/ 'Kotlin/JVM'],
  'scala': ['Scala'],
  'perl': ['Perl'],
  // 'wy': ['文言']
}

export const stateColor: string[] = ['rgb(20, 85, 143)', 'rgb(52, 152, 219)', 'rgb(250, 219, 20)', '#001277', '#001277', '#001277', '#fb6340', '#8e44ad', '', '', '', 'rgb(14, 29, 105)', 'rgb(82, 196, 26)', '', 'rgb(231, 76, 60)'];
export enum resultState {
  'OLE' = 3,
  'MLE' = 4,
  'TLE' = 5,
  'WA' = 6,
  'RE' = 7,
  'UKE' = 11,
  'AC' = 12
}
export enum colorStyle {
  'grey' = 'font-weight: bold; color: rgb(191,191,191);',
  'Gray' = 'font-weight: bold; color: rgb(191,191,191);',
  'blue' = 'font-weight: bold; color: rgb(52, 152, 219);',
  'Blue' = 'font-weight: bold; color: rgb(52, 152, 219);',
  'green' = 'font-weight: bold; color: rgb(82, 196, 26);',
  'Green' = 'font-weight: bold; color: rgb(82, 196, 26);',
  'orange' = 'font-weight: bold; color: rgb(243, 156, 17);',
  'Orange' = 'font-weight: bold; color: rgb(243, 156, 17);',
  'red' = 'font-weight: bold; color: rgb(254, 76, 97);',
  'Red' = 'font-weight: bold; color: rgb(254, 76, 97);',
  'purple' = 'font-weight: bold; color: rgb(157, 61, 207);',
  'Purple' = 'font-weight: bold; color: rgb(157, 61, 207);',
  'cheater' = 'font-weight: bold; color: rgb(173, 139, 0);',
  'Cheater' = 'font-weight: bold; color: rgb(173, 139, 0);'
}
export const contestType: string[] = ['', 'OI', 'ACM', '乐多', 'IOI', 'CodeForces (暂不可用)']
export const contestStyle: string[] = ['',
  'color: rgb(255, 255, 255); background: rgb(243, 156, 17);',// OI
  'color: rgb(255, 255, 255); background: rgb(157, 61, 207);',// ACM
  'color: rgb(255, 255, 255); background: rgb(255, 193, 22);',// 乐多
  'color: rgb(255, 255, 255); background: rgb(255, 193, 22);',// IOI
  'color: rgb(255, 255, 255); background: rgb(255, 193, 22);'// CodeForces (暂不可用)
]
export enum contestRated {
  'false' = 'display: none',
  'true' = 'color: rgb(255, 255, 255); background: rgb(82, 196, 26);'
}
export const contestVisibility: string[] = ['',
  '官方比赛',
  '团队公开赛',
  '团队内部赛',
  '个人公开赛',
  '个人邀请赛',
  '团队邀请赛'
]
export const contestVisibilityStyle: string[] = ['',
  'color: rgb(255, 255, 255); background: rgb(231, 76, 60);',
  'color: rgb(255, 255, 255); background: rgb(34, 112, 10);',
  'color: rgb(255, 255, 255); background: rgb(52, 152, 219);',
  'color: rgb(255, 255, 255); background: rgb(52, 152, 219);',
  'color: rgb(255, 255, 255); background: rgb(41, 73, 180);',
  'color: rgb(255, 255, 255); background: rgb(41, 73, 180);'
]

export enum difficultyID {
  '暂无评定' = 0,
  '入门' = 1,
  '普及-' = 2,
  '普及/提高-' = 3,
  '普及+/提高' = 4,
  '提高+/省选-' = 5,
  '省选/NOI-' = 6,
  'NOI/NOI+/CTSC' = 7
}

export enum problemset {
  '洛谷题库' = 'P',
  '入门与面试' = 'B',
  'CodeForces' = 'CF',
  'SPOJ' = 'SP',
  'AtCoder' = 'AT',
  'UVA' = 'UVA'
}

export const difficultyName = [
  '暂无评定',
  '入门',
  '普及-',
  '普及/提高-',
  '普及+/提高',
  '提高+/省选-',
  '省选/NOI-',
  'NOI/NOI+/CTSC'
]
// Reference: https://www.luogu.com.cn/paste/3ez54nl2
export const difficultyColor = [
  "#BFBFBF",
  "#FE4C61",
  "#F39C11",
  "#FFC116",
  "#52C41A",
  "#3498DB",
  "#3498DB",
  "#0E1D69"
]

export const tagsColor = ['', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', '', 'rgb(19,194,194)', '', 'rgb(38,38,38)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(19,194,194)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(243,156,17)', 'rgb(243,156,17)', 'rgb(38,38,38)', '', 'rgb(243,156,17)', 'rgb(243,156,17)', '', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', '', 'rgb(38,38,38)', 'rgb(41,73,180)', '', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(82,196,26)', 'rgb(82,196,26)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', '', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', '', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', '', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(38,38,38)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', '', 'rgb(41,73,180)', '', 'rgb(41,73,180)', '', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(82,196,26)', 'rgb(41,73,180)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(52,152,219)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(52,152,219)', 'rgb(41,73,180)', 'rgb(19,194,194)', 'rgb(19,194,194)', 'rgb(19,194,194)']
export const tagsName = ['', '模拟', '字符串', '动态规划,dp', '搜索', '数学', '图论', '贪心', '计算几何', '暴力数据结构', '高精度', '树形结构', '递推', '博弈论', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '重庆', '四川', '河南', '莫队', '线段树', '倍增', '线性结构', '二分', 'USACO', '并查集', '各省省选', '点分治', '平衡树', '二叉堆', 'WC/CTSC/集训队', '树状数组', '递归', '树上启发式合并', '单调队列', 'POI', '2021', '2022', '2023', '2024', '2025', 'LGV引理', '矩阵树定理', '珂朵莉树,颜色段均摊,ODT', '原根', '三分', 'Kruskal重构树', '多项式', '福建省历届夏令营', '矩阵运算', '数论', '算法', '数据结构', '来源', '时间', 'NOI系列', '离散化', '网络流', '高级数据结构', '洛谷原创', 'NOIp普及组', 'NOIp提高组', '', 'APIO', '', '地区', '浙江', '上海', '福建', '江苏', '安徽', '湖南', '北京', '河北', '广东', '山东', '吉林', 'NOI导刊', 'cdq分治', '后缀自动机,SAM', 'IOI', '交互题', '提交答案', '特殊题目', '', 'SpecialJudge', 'O2优化', '', '\ufeff基础算法', '枚举,暴力', '分治', '排序', '114', 'CCO', 'CCC', 'CEOI', 'eJOI', '快速排序', '堆排序', '希尔排序', '信息论', '查找算法', '顺序查找', '二分查找', '广度优先搜索,BFS', '深度优先搜索,DFS', '剪枝', '记忆化搜索', '启发式搜索', '迭代加深搜索', '启发式迭代加深搜索,IDA*', 'DancingLinks', '爬山法', '模拟退火', '随机调整', '遗传', '动态规划初步', '背包', '环形dp', '数位dp', '', '多维状态', '区间dp', '', '动态规划优化', '降低维度,降维', '优先队列', '矩阵加速,矩阵优化', '斜率优化', '状态压缩,状压', '树形dp', '凸完全单调性,凸单调', '四边形不等式', '图的建立,建图', '邻接矩阵', '邻接表', '图遍历', '拓扑排序', '最短路', '江西', '贵州', '广西', '陕西', 'K短路', '生成树', '辽宁', '云南', '生成树的另类算法', '次小生成树', '特殊生成树', '圈和块', '最小环', '负权环', '连通块', '2-SAT', '欧拉公式', '', '强连通分量,缩点', 'Tarjan', '割点', '欧拉回路', 'AOV', 'AOE', '差分约束', '仙人掌', '二分图', '匈牙利算法', '一般图的最大匹配', 'Konig定理', '带权二分图匹配', 'KM算法', '稳定婚姻系统', '最大流', 'Dinic', 'Sap', '上下界网络流', '最小割', '闭合图', '最小点权覆盖集', '最大点权独立集', '分数规划', '最大密度子图', '费用流', '最短路增广费用流', '', '最小费用可行流', '树的遍历', '树上距离', '节点到根的距离', '最近公共祖先,LCA', '节点间的距离', '树的直径', '哈夫曼树', '左偏树', '斜堆', '二项堆', 'AVL', 'Treap', 'SBT', 'Splay', '静态排序树', '替罪羊树', '二维线段树', '矩形树', '', '动态树', '树链剖分,树剖', 'Link-CutTree,LCT', '树的应用', 'RMQ', '树套树', '主席树', '可持久化', '哈希,HASH', 'ELFhash', 'SDBM', 'BKDR', '素数判断,质数,筛法', '众数', '最大公约数,gcd', '扩展欧几里德,扩欧', '不定方程', '进制', '集合论', '群论', '置换', 'Polya原理', '虚树', '中国剩余定理,CRT', '莫比乌斯反演', '组合数学', '排列组合', '前缀和', '二项式定理', '康托展开', '袋与球问题', '鸽笼', '容斥', '斐波那契,Fibonacci', '卡特兰,Catalan', 'Stirling', 'A*算法', '生成函数', '线性规划', '概率论,统计', '简单概率', '条件概率', 'Bayes', '期望', '线性代数', '矩阵乘法', '线性递推,递推式', '高斯消元', '异或方程组', '逆元', '线性基', '微积分初步', '极限', '导数', '积分', '定积分', '立体解析几何', '级数', '基本数组', '向量', '栈', '队列', '块状链表,块状数组,分块', 'st表,稀疏表', '凸包', '叉积', '线段相交', '点积', '半平面交', '最近点对', '凸多边形的交', '离散化扫描', '旋转卡壳', '字典树,Trie树', 'AC自动机', 'KMP', '后缀数组,SA', '后缀树', '有限状态自动机', '哈夫曼,Huffman', '简单密码学', '其它技巧', '随机贪心,随机化', 'Nim游戏', '博弈树', 'Shannon开关游戏', '快速傅里叶变换FFT', '位运算,按位', '', '整体二分', '', '构造', '', '环套树', 'K-DTree', 'Lucas定理', '插头dp', '快速数论变换NTT', '回文自动机PAM', '快速沃尔什变换FWT', '快速莫比乌斯变换FMT', '天津', 'Manacher算法', '差分', '清华集训', '网络流24题', 'COCI', 'BalticOI', 'ACM_ICPC', 'JOI', '洛谷月赛', '2026', '2027', '2028', '2077', 'CSPS提高级', 'CSPJ入门级', '1996', '双指针,尺取法,two-pointer', 'AGM', 'NOIOnline', 'Ynoi']