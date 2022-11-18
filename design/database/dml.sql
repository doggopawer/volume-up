/* 회원가입 */
INSERT INTO `user`(`email`,`password`)
VALUES (
        'doggodie@gmail.com',
        '1234'
        );
/* 로그인 */
SELECT password FROM user
WHERE email='doggopawer@gmail.com';

/*루틴 관리, 루틴 진행*/
SELECT * FROM routine
WHERE user_id = (SELECT id FROM user WHERE email='doggopawer@gmail.com')
LIMIT 5;

/*운동 관리, 운동 진행*/
SELECT * FROM workout
WHERE routine_id = 2
LIMIT 5;

/* 루틴 추가 */
INSERT INTO `routine`(`name`,`user_id`)
VALUES (
        '가슴하는날',
        (SELECT id FROM user WHERE email='doggopawer@gmail.com')
        );

/* 운동 추가 */
INSERT INTO `workout`
(name, weight, rep, `set`, routine_id)
VALUES (
        '체스트프레스',
        50,
        10,
        3,
        2
        );

/* 루틴 수정/삭제 */
SELECT * FROM routine
WHERE id =1;

UPDATE routine
SET name='등 하는날'
WHERE id= 1;

DELETE FROM routine WHERE id = 3;

/* 운동 수정/삭제, 운동 성공 여부 */
SELECT * FROM workout
WHERE id = 1;

UPDATE workout
SET name='벤치프레스',
    weight = 50,
    rep= 10,
    `set`= 5
WHERE id=1;

DELETE FROM routine WHERE id = 3;















