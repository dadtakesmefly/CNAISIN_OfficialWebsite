# CNAISIN_OfficialWebsite
全屏滚动、H5动画
## 移动端下滑箭头动画

           .container {
            position: absolute;
            width: 24px;
            height: 24px;
            left: 50%;
            bottom: -20px;
            margin-left: -12px;
          }
          .chevron {
            position: absolute;
            width: 28px;
            height: 1px;

            opacity: 0;
            transform: scale3d(0.5, 0.5, 0.5);
            animation: move 3s linear 0.5s infinite;
          }
          .chevron:first-child {
            animation: move 3s linear 1.5s infinite;
          }
          .chevron:nth-child(2) {
            animation: move 3s linear 2.5s infinite;
          }
          .chevron:before,
          .chevron:after {
            content: ' ';
            position: absolute;
            top: 0;
            height: 100%;
            width: 51%;
            background:#ccc;
          }
          .chevron:before {
            left: 0;
            transform: skew(0deg, -30deg);
          }

          .chevron:after {
            right: 0;
            width: 50%;
            transform: skew(0deg, 30deg);
          }
          @keyframes move {
            0% {
              opacity: 1;

            }
            33% {
              opacity: 1;
              transform: translateY(-30px);
            }
            66% {
              opacity: 1;
              transform: translateY(-40px);
            }
            100% {
              opacity: 0;
              transform: translateY(-55px) ;
            }
          }
         
