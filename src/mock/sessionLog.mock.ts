import { ResponseData } from '../constant';
import { mockApi } from './mock.helper';

export function mockSessionLog() {
  return {
    async getSessionLog(): Promise<ResponseData<any>> {
      return mockApi({
        logs: [
          {
            session_id: 'eabacad63590dcce8581',
            result: '{ "6" : 0 }',
            partner: 12,
            id_card:
              '{"photo_id" : "64947650", "status" : 0, "time" : "2023-03-14T23:59:56.144+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813195_9334624_1678813195368_275132.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"hometown": "Minh Phú, Đông Hưng, Thái Bình", "hometownEntities": {"province": "Thái Bình", "district": "Đông Hưng", "ward": "Minh Châu", "street": ""}, "address": "Văn Mỹ Hoàng Văn Thụ, Chương Mỹ Hà Nội", "addressEntities": {"province": "Hà Nội", "district": "Chương Mỹ", "ward": "Hoàng Văn Thụ", "street": "Văn Mỹ"}, "dob": "21/03/1992", "name": "NGUYỄN THỊ THỦY", "national": "Việt Nam", "gender": "Nữ", "idnum": "001192004189", "validUntil": "21/03/2032", "idcard_type": "CHIP", "aligner_h_w": [1499, 948], "is_valid_format": true, "logic_status": {"CC_01": true, "CC_02": true, "CC_03": true, "CC_04": true, "CC_05": true, "CC_06": true, "CC_07": true, "CC_08": true, "CC_09": true}, "ratio_valid_fields": "4/4", "image_infos": {"image_shape": [2160, 2880, 3], "idcard_position": [{"photo_id": null, "poly_tl_tr_br_bl": [[826, 1843], [828, 364], [1750, 361], [1777, 1835]], "bbox": {"x": 822, "y": 347, "w": 948, "h": 1499}, "score": 0.9902099370956421, "class_id": 4, "class_name": "CHIP"}]}, "qr": {"parsed": {"idnum": "001192004189", "old_idnum": "112464035", "name": "Nguyễn Thị Thủy", "dob": "21031992", "gender": "Nữ", "address": "Văn Mỹ, Hoàng Văn Thụ, Chương Mỹ, Hà Nội", "DateIssued": "28022022"}, "raw": "001192004189|112464035|Nguyễn Thị Thủy|21031992|Nữ|Văn Mỹ, Hoàng Văn Thụ, Chương Mỹ, Hà Nội|28022022"}, "failed_logic": null}, "extra_info" : {"execute_time": {"idcard_face_api": 251, "front_align_internal": 21, "analyse_face_internal": 105, "ocr_front_idcard_api": 674, "front_text_internal": 372, "front_detector_internal": 26, "recognizer_internal": 43, "sanity_idcard_internal": 161}, "check_status": {"Is Image Screenshot": false, "Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false}, "metrics": {"sanity": "0.048", "check": "0.094", "recaptured": "1.0", "fakeid": "0.005", "blur": "0.0", "bright": "0.023", "dark": "0.011", "inview": "1234.0", "photocopy": "0.059", "gloss": "0.106"}, "full_execute_time": {"idcard_face_api": 251.82294845581055, "idcard_face_internal": 232.96594619750977, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 40.503740310668945, "front_align_api": 51.0, "front_align_internal": 21.0, "analyse_face_api": 0.0, "analyse_face_internal": 105.54313659667969, "face_detector_api": 0.0, "face_detector_internal": 77.21781730651855, "face_encoder_api": 0.0, "face_encoder_internal": 24.564266204833984, "decode_image_np_api": 0.0, "decode_image_np_internal": 40.38214683532715, "screenshot_sanity_api": 59.10038948059082, "screenshot_sanity_internal": 16.6165828704834, "qr_eb_api": 0.06832170486450195, "qr_eb_internal": 0.0, "qr_detector_api": 0.0, "qr_detector_internal": 21.21424674987793, "national_emblem_detector_api": 0.0, "national_emblem_detector_internal": 21.21424674987793, "ocr_front_idcard_api": 674.264669418335, "ocr_front_idcard_internal": 414.6544933319092, "front-text_api": 373.8367557525635, "front-text_internal": 372.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 77.0, "front_detector_api": 56.0, "front_detector_internal": 26.0, "text_grouping_api": 0.0, "text_grouping_internal": 7.0, "recognizer_api": 59.15522575378418, "recognizer_internal": 43.462514877319336, "reformat_result_api": 0.0, "reformat_result_internal": 37.0, "sanity_idcard_api": 229.0, "sanity_idcard_internal": 161.03625297546387, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 11.243104934692383, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 39.537906646728516, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 10.895729064941406, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 32.440900802612305, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 3.6194324493408203, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 3.345966339111328, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 31.218290328979492, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 6.804466247558594, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 16.583919525146484}}}',
            back_id_card:
              '{"photo_id" : "64947654", "status" : 0, "time" : "2023-03-14T23:59:57.783+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813197_3643284_1678813197200_275135.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"DateIssued": "28/02/2022", "PlaceIssued": "cục trưởng cục cảnh sát quản lý hành chính về trật tự xã hội", "logic_status": {"BACK_CMND_01": true, "BACK_CMND_02": true, "BACK_CMND_03": true}, "ratio_valid_fields": "2/2", "is_valid_format": true, "idcard_type": "BACK_CHIP", "aligner_h_w": [1335, 855], "failed_logic": null, "MachineCode": {"error_code": 0, "error_message": "OK", "execute_time": 0.17914748191833496, "photo_id": "0", "service_name": "line_chip_ocr", "call_time": 187.0, "result": {"back_fields": {"name": "NGUYENTHITHUY", "dob": "920321", "idnum": "001192004189"}, "characters": "IDVNM1920041890001192004189<<19203217F3203215VNM<<<<<<<<<<<2NGUYEN<<THI<THUY<<<<<<<<<<<<<<"}, "extra_info": []}}, "extra_info" : {"execute_time": {"ocr_back_idcard_api": 480, "recognizer_internal": 26, "sanity_idcard_internal": 184}, "check_status": {"Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false, "Is Image Screenshot": false}, "metrics": {"check": "0.0", "recaptured": "0.0", "fakeid": "0.0", "blur": "0.001", "bright": "0.051", "dark": "0.016", "inview": "1234.0", "photocopy": "0.111", "gloss": "0.138", "sanity": "0.042"}, "full_execute_time": {"ocr_back_idcard_api": 480.0593852996826, "ocr_back_idcard_internal": 461.71069145202637, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 44.220924377441406, "front-text_api": 417.2353744506836, "front-text_internal": 413.0, "front_align_api": 46.0, "front_align_internal": 16.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 59.0, "front_detector_api": 55.0, "front_detector_internal": 25.0, "text_grouping_api": 0.0, "text_grouping_internal": 2.0, "recognizer_api": 45.5775260925293, "recognizer_internal": 26.631832122802734, "reformat_result_api": 0.0, "reformat_result_internal": 1.0, "line_chip_ocr_api": 187.0, "line_chip_ocr_internal": 0.17914748191833496, "sanity_idcard_api": 293.0, "sanity_idcard_internal": 184.05413627624512, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 13.967037200927734, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 36.68022155761719, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 14.145612716674805, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 41.13483428955078, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 3.2036304473876953, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 1.8086433410644531, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 36.03720664978027, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 9.202003479003906, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 22.88985252380371, "decode_image_np_api": 0.0, "decode_image_np_internal": 37.83106803894043, "screenshot_sanity_api": 64.90731239318848, "screenshot_sanity_internal": 23.256301879882812}}}',
            selfie:
              '{"photo_id" : "64947656", "status" : 0, "time" : "2023-03-14T23:59:58.807+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813198_4361231_1678813198270_275139.jpg", "service_type_id" : 6, "prob" : 0.57999999999999996, "issame" : true, "api_check" : 1}',
            verify_avatar: null,
          },
          {
            session_id: 'ea9ac2f63db0d4ee8da1',
            result: '{ "6" : 0 }',
            partner: 12,
            id_card:
              '{"photo_id" : "64947631", "status" : 0, "time" : "2023-03-14T23:59:45.607+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813185_1634595_1678813184725_275099.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"hometown": "Ngọc Động, Quảng Hòa Cao Bằng", "hometownEntities": {"province": "Cao Bằng", "district": "Quảng Uyên", "ward": "Ngọc Động", "street": ""}, "address": "Xóm Tam Hợp Ngọc Động, Quảng Hòa Cao Bằng", "addressEntities": {"province": "Cao Bằng", "district": "Quảng Uyên", "ward": "Ngọc Động", "street": "Xóm Tam Hợp"}, "dob": "04/06/2001", "name": "LONG NAM QUỐC", "national": "Việt Nam", "gender": "Nam", "idnum": "004201002229", "validUntil": "04/06/2026", "idcard_type": "CHIP", "aligner_h_w": [1427, 908], "is_valid_format": true, "logic_status": {"CC_01": true, "CC_02": true, "CC_03": true, "CC_04": true, "CC_05": true, "CC_06": true, "CC_07": true, "CC_08": true, "CC_09": true}, "ratio_valid_fields": "4/4", "image_infos": {"image_shape": [2560, 1920, 3], "idcard_position": [{"photo_id": null, "poly_tl_tr_br_bl": [[1286, 694], [1302, 2100], [408, 2118], [398, 693]], "bbox": {"x": 394, "y": 688, "w": 908, "h": 1427}, "score": 0.9905633926391602, "class_id": 4, "class_name": "CHIP"}]}, "qr": {"parsed": {"idnum": "004201002229", "old_idnum": "085933576", "name": "Long Nam Quốc", "dob": "04062001", "gender": "Nam", "address": "Xóm Tam Hợp, Ngọc Động, Quảng Hòa, Cao Bằng", "DateIssued": "02012023"}, "raw": "004201002229|085933576|Long Nam Quốc|04062001|Nam|Xóm Tam Hợp, Ngọc Động, Quảng Hòa, Cao Bằng|02012023"}, "failed_logic": null}, "extra_info" : {"execute_time": {"idcard_face_api": 226, "front_align_internal": 19, "analyse_face_internal": 127, "ocr_front_idcard_api": 619, "front_text_internal": 354, "front_detector_internal": 24, "recognizer_internal": 56, "sanity_idcard_internal": 189}, "check_status": {"Is Image Screenshot": false, "Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false}, "metrics": {"sanity": "0.06", "check": "0.1", "recaptured": "1.0", "fakeid": "0.001", "blur": "0.0", "bright": "0.0", "dark": "0.015", "inview": "1234.0", "photocopy": "0.173", "gloss": "0.112"}, "full_execute_time": {"idcard_face_api": 226.6979217529297, "idcard_face_internal": 212.40949630737305, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 28.49125862121582, "front_align_api": 40.0, "front_align_internal": 19.0, "analyse_face_api": 0.0, "analyse_face_internal": 127.89773941040039, "face_detector_api": 0.0, "face_detector_internal": 72.33691215515137, "face_encoder_api": 0.0, "face_encoder_internal": 51.70750617980957, "decode_image_np_api": 0.0, "decode_image_np_internal": 23.179054260253906, "screenshot_sanity_api": 33.05554389953613, "screenshot_sanity_internal": 16.52216911315918, "qr_eb_api": 0.05157589912414551, "qr_eb_internal": 0.0, "qr_detector_api": 0.0, "qr_detector_internal": 24.282217025756836, "national_emblem_detector_api": 0.0, "national_emblem_detector_internal": 24.282217025756836, "ocr_front_idcard_api": 619.7934150695801, "ocr_front_idcard_internal": 386.397123336792, "front-text_api": 357.4831485748291, "front-text_internal": 354.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 71.0, "front_detector_api": 51.0, "front_detector_internal": 24.0, "text_grouping_api": 0.0, "text_grouping_internal": 7.0, "recognizer_api": 92.0257568359375, "recognizer_internal": 56.888580322265625, "reformat_result_api": 0.0, "reformat_result_internal": 34.0, "sanity_idcard_api": 230.0, "sanity_idcard_internal": 189.39542770385742, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 27.579307556152344, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 41.44096374511719, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 16.0830020904541, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 43.462514877319336, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 2.2542476654052734, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 2.207040786743164, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 28.629302978515625, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 6.154775619506836, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 15.718936920166016}}}',
            back_id_card:
              '{"photo_id" : "64947633", "status" : 0, "time" : "2023-03-14T23:59:46.857+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813187_026455_1678813186232_275102.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"DateIssued": "02/01/2023", "PlaceIssued": "cục trưởng cục cảnh sát quản lý hành chính về trật tự xã hội", "logic_status": {"BACK_CMND_01": true, "BACK_CMND_02": true, "BACK_CMND_03": true}, "ratio_valid_fields": "2/2", "is_valid_format": true, "idcard_type": "BACK_CHIP", "aligner_h_w": [1115, 1743], "failed_logic": null, "MachineCode": {"error_code": 0, "error_message": "OK", "execute_time": 0.1756424903869629, "photo_id": "0", "service_name": "line_chip_ocr", "call_time": 187.0, "result": {"back_fields": {"name": "LONGNAMQUOC", "dob": "010604", "idnum": "004201002229"}, "characters": "IDVNM2010022296004201002229<<00106049M2606048VNM<<<<<<<<<<<8LONG<<NAM<QUOC<<<<<<<<<<<<<<<<"}, "extra_info": []}}, "extra_info" : {"execute_time": {"ocr_back_idcard_api": 464, "recognizer_internal": 31, "sanity_idcard_internal": 156}, "check_status": {"Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false, "Is Image Screenshot": false}, "metrics": {"check": "0.0", "recaptured": "0.0", "fakeid": "0.0", "blur": "0.007", "bright": "0.001", "dark": "0.019", "inview": "1234.0", "photocopy": "0.09", "gloss": "0.121", "sanity": "0.063"}, "full_execute_time": {"ocr_back_idcard_api": 464.75672721862793, "ocr_back_idcard_internal": 448.103666305542, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 32.47237205505371, "front-text_api": 415.3871536254883, "front-text_internal": 412.0, "front_align_api": 24.0, "front_align_internal": 16.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 94.0, "front_detector_api": 49.0, "front_detector_internal": 20.0, "text_grouping_api": 0.0, "text_grouping_internal": 1.0, "recognizer_api": 38.50722312927246, "recognizer_internal": 31.899452209472656, "reformat_result_api": 0.0, "reformat_result_internal": 0.0, "line_chip_ocr_api": 187.0, "line_chip_ocr_internal": 0.1756424903869629, "sanity_idcard_api": 279.0, "sanity_idcard_internal": 156.75663948059082, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 14.498472213745117, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 34.91067886352539, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 12.336492538452148, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 36.80729866027832, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 2.4890899658203125, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 2.3131370544433594, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 27.085542678833008, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 5.687952041625977, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 15.839338302612305, "decode_image_np_api": 0.0, "decode_image_np_internal": 35.07113456726074, "screenshot_sanity_api": 57.15608596801758, "screenshot_sanity_internal": 15.177011489868164}}}',
            selfie:
              '{"photo_id" : "64947636", "status" : 0, "time" : "2023-03-14T23:59:47.766+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813187_8571362_1678813187104_275106.jpg", "service_type_id" : 6, "prob" : 0.589999999999999969, "issame" : true, "api_check" : 1}',
            verify_avatar: null,
          },
          {
            session_id: 'd545c0293f6fd6318f7e',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": null, "time": "2023-03-14T23:59:32.012+07:00", "phone": null, "issame": null, "status": 0, "photo_id": "64947609", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813172_260392_1678813171621_275074.jpg", "service_type_id": 5}',
          },
          {
            session_id: 'fa58e6341972f02ca963',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": 0.689999999999999947, "time": "2023-03-14T23:59:26.853+07:00", "phone": null, "issame": true, "status": 0, "photo_id": "64947601", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813166_5212715_1678813166469_275065.jpg", "service_type_id": 5}',
          },
          {
            session_id: 'c1b4c4d83b9ed2c08b8f',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": 0.75, "time": "2023-03-14T23:59:18.835+07:00", "phone": null, "issame": true, "status": 0, "photo_id": "64947589", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813158_5082538_1678813158396_275051.jpg", "service_type_id": 5}',
          },
          {
            session_id: '7d9b7bf784b16def34a0',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": 0.729999999999999982, "time": "2023-03-14T23:59:18.083+07:00", "phone": null, "issame": true, "status": 0, "photo_id": "64947587", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813158_4019897_1678813157764_275048.jpg", "service_type_id": 5}',
          },
          {
            session_id: '1a2d1441eb0702595b16',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": 0.57999999999999996, "time": "2023-03-14T23:59:10.745+07:00", "phone": null, "issame": true, "status": 0, "photo_id": "64947570", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813150_4614835_1678813150296_275025.jpg", "service_type_id": 5}',
          },
          {
            session_id: '0c9f6cf393b57aeb23a4',
            result: '{ "6" : 0 }',
            partner: 12,
            id_card:
              '{"photo_id" : "64947549", "status" : 0, "time" : "2023-03-14T23:58:52.321+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813132_4279733_1678813131695_274991.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"hometown": "Sài Sơn Quốc Oai Hà Nội", "hometownEntities": {"province": "Hà Nội", "district": "Quốc Oai", "ward": "Sài Sơn", "street": ""}, "address": "Xóm Đồng Mạc Đa Phúc Sài Sơn, Quốc Oai Hà Nội", "addressEntities": {"province": "Hà Nội", "district": "Quốc Oai", "ward": "Sài Sơn", "street": "Xóm Đồng Mạc Đa Phúc"}, "dob": "14/06/1999", "name": "NGUYỄN THỊ MỸ DUYÊN", "national": "Việt Nam", "gender": "Nữ", "idnum": "001199013315", "validUntil": "14/06/2024", "idcard_type": "CHIP", "aligner_h_w": [394, 623], "is_valid_format": true, "logic_status": {"CC_01": true, "CC_02": true, "CC_03": true, "CC_04": true, "CC_05": true, "CC_06": true, "CC_07": true, "CC_08": true, "CC_09": true}, "ratio_valid_fields": "4/4", "image_infos": {"image_shape": [487, 720, 3], "idcard_position": [{"photo_id": null, "poly_tl_tr_br_bl": [[51, 59], [665, 53], [669, 436], [53, 448]], "bbox": {"x": 46, "y": 53, "w": 623, "h": 394}, "score": 0.9938706159591675, "class_id": 4, "class_name": "CHIP"}]}, "qr": {"parsed": null, "raw": null}, "failed_logic": null}, "extra_info" : {"execute_time": {"idcard_face_api": 151, "front_align_internal": 19, "analyse_face_internal": 95, "ocr_front_idcard_api": 408, "front_text_internal": 246, "front_detector_internal": 19, "recognizer_internal": 36, "sanity_idcard_internal": 156}, "check_status": {"Is Image Screenshot": false, "Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false}, "metrics": {"sanity": "0.03", "check": "0.102", "recaptured": "1.0", "fakeid": "0.0", "blur": "0.011", "bright": "0.006", "dark": "0.012", "inview": "1234.0", "photocopy": "0.081", "gloss": "0.106"}, "full_execute_time": {"idcard_face_api": 151.75652503967285, "idcard_face_internal": 135.48636436462402, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 2.302885055541992, "front_align_api": 26.0, "front_align_internal": 19.0, "analyse_face_api": 0.0, "analyse_face_internal": 95.1533317565918, "face_detector_api": 0.0, "face_detector_internal": 66.68353080749512, "face_encoder_api": 0.0, "face_encoder_internal": 25.206327438354492, "decode_image_np_api": 0.0, "decode_image_np_internal": 2.3012161254882812, "screenshot_sanity_api": 23.934602737426758, "screenshot_sanity_internal": 18.048524856567383, "qr_eb_api": 0.10892558097839355, "qr_eb_internal": 0.0, "qr_detector_api": 0.0, "qr_detector_internal": 16.97087287902832, "national_emblem_detector_api": 0.0, "national_emblem_detector_internal": 16.97087287902832, "ocr_front_idcard_api": 408.618688583374, "ocr_front_idcard_internal": 251.06358528137207, "front-text_api": 248.43931198120117, "front-text_internal": 246.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 15.0, "front_detector_api": 43.0, "front_detector_internal": 19.0, "text_grouping_api": 0.0, "text_grouping_internal": 12.0, "recognizer_api": 46.26321792602539, "recognizer_internal": 36.42892837524414, "reformat_result_api": 0.0, "reformat_result_internal": 29.0, "sanity_idcard_api": 193.0, "sanity_idcard_internal": 156.2483310699463, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 12.723207473754883, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 36.455392837524414, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 14.563322067260742, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 32.17935562133789, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 2.646207809448242, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 2.4411678314208984, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 29.502153396606445, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 5.832672119140625, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 16.00933074951172}}}',
            back_id_card:
              '{"photo_id" : "64947550", "status" : 0, "time" : "2023-03-14T23:58:53.121+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813132_7107296_1678813132518_274993.jpg", "service_type_id" : 6, "api_check" : 0, "text_ocr" : {"DateIssued": "10/07/2021", "PlaceIssued": "cục trưởng cục cảnh sát quản lý hành chính về trật tự xã hội", "logic_status": {"BACK_CMND_01": true, "BACK_CMND_02": true, "BACK_CMND_03": true}, "ratio_valid_fields": "2/2", "is_valid_format": true, "idcard_type": "BACK_CHIP", "aligner_h_w": [400, 628], "failed_logic": null, "MachineCode": {"error_code": 0, "error_message": "OK", "execute_time": 0.30997538566589355, "photo_id": "0", "service_name": "line_chip_ocr", "call_time": 312.0, "result": {"back_fields": {"name": "NGUYENTHIMYDUYEN", "dob": "990614", "idnum": "001199013315"}, "characters": "IDVNM1990133158001199013315<<99906149F2406145VNM<<<<<<<<<<<6NGUYEN<<THI<MY<DUYEN<<<<<<<<<<"}, "extra_info": []}}, "extra_info" : {"execute_time": {"ocr_back_idcard_api": 479, "recognizer_internal": 19, "sanity_idcard_internal": 166}, "check_status": {"Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false, "Is Image Screenshot": false}, "metrics": {"check": "0.0", "recaptured": "0.0", "fakeid": "0.0", "blur": "0.042", "bright": "0.0", "dark": "0.007", "inview": "1234.0", "photocopy": "0.102", "gloss": "0.135", "sanity": "0.111"}, "full_execute_time": {"ocr_back_idcard_api": 479.43878173828125, "ocr_back_idcard_internal": 454.0865421295166, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 2.6090145111083984, "front-text_api": 451.2474536895752, "front-text_internal": 447.0, "front_align_api": 32.0, "front_align_internal": 21.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 13.0, "front_detector_api": 45.0, "front_detector_internal": 18.0, "text_grouping_api": 0.0, "text_grouping_internal": 1.0, "recognizer_api": 30.123233795166016, "recognizer_internal": 19.405603408813477, "reformat_result_api": 0.0, "reformat_result_internal": 0.0, "line_chip_ocr_api": 312.0, "line_chip_ocr_internal": 0.30997538566589355, "sanity_idcard_api": 391.0, "sanity_idcard_internal": 166.08047485351562, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 14.040470123291016, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 44.25239562988281, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 11.090755462646484, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 33.19215774536133, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 3.7033557891845703, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 3.5305023193359375, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 29.909133911132812, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 5.732059478759766, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 15.783309936523438, "decode_image_np_api": 0.0, "decode_image_np_internal": 2.343416213989258, "screenshot_sanity_api": 25.07472038269043, "screenshot_sanity_internal": 17.99941062927246}}}',
            selfie:
              '{"photo_id" : "64947553", "status" : 0, "time" : "2023-03-14T23:58:54.038+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813133_481145_1678813133369_274998.jpg", "service_type_id" : 6, "prob" : 0.800000000000000044, "issame" : true, "api_check" : 1}',
            verify_avatar: null,
          },
          {
            session_id: 'f2a297ce688881d6d899',
            result: '{ "1" : 0 }',
            partner: 12,
            id_card:
              '{"time": "2023-03-14T23:58:46.878+07:00", "status": 0, "photo_id": "64947543", "text_ocr": {"qr": {"raw": null, "parsed": null}, "dob": "26/07/2000", "name": "DƯƠNG NHỨT ĐỒNG", "idnum": "087200010826", "gender": "Nam", "address": "Ấp Hạ Tân Quới, Thanh Bình Đồng Tháp", "hometown": "Tân Quới, Thanh Bình Đồng Tháp", "national": "Việt Nam", "validUntil": "26/07/2025", "aligner_h_w": [1089, 708], "idcard_type": "CHIP", "failed_logic": null, "logic_status": {"CC_01": true, "CC_02": true, "CC_03": true, "CC_04": true, "CC_05": true, "CC_06": true, "CC_07": true, "CC_08": true, "CC_09": true}, "addressEntities": {"ward": "Tân Quới", "street": "Ấp Hạ", "district": "Thanh Bình", "province": "Đồng Tháp"}, "is_valid_format": true, "hometownEntities": {"ward": "Tân Quới", "street": "", "district": "Thanh Bình", "province": "Đồng Tháp"}, "ratio_valid_fields": "4/4"}, "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813126_857093_1678813126223_274983.jpg", "extra_info": {"metrics": {"blur": "0.0", "dark": "0.006", "check": "0.095", "gloss": "0.109", "bright": "0.0", "fakeid": "0.002", "inview": "1234.0", "sanity": "0.023", "photocopy": "0.086", "recaptured": "1.0"}, "check_status": {"Is Idcard Blur": false, "Is Idcard Gloss": false, "Is Idcard Too Dark": false, "Is Idcard Face Fake": false, "Is Idcard Photocopy": false, "Is Image Screenshot": false, "Is Idcard Recaptured": false, "Is Idcard Too Bright": false, "Is Idcard Fully Inview": false, "Is Idcard Invalid Font": false}, "execute_time": {"front_text_internal": 365, "recognizer_internal": 44, "front_align_internal": 16, "ocr_front_idcard_api": 396, "sanity_idcard_internal": 186, "front_detector_internal": 20}, "full_execute_time": {"qr_eb_api": 0.13483476638793945, "front-text_api": 368.4697151184082, "qr_eb_internal": 0.0, "recognizer_api": 65.01388549804688, "front_align_api": 43.0, "qr_detector_api": 0.0, "sanity_idcard_api": 264.0, "text_grouping_api": 0.0, "front_detector_api": 46.0, "decode_image_np_api": 0.0, "front-text_internal": 365.0, "recognizer_internal": 44.32797431945801, "reformat_result_api": 0.0, "decode_image_pil_api": 0.0, "front_align_internal": 16.0, "ocr_front_idcard_api": 396.2860107421875, "qr_detector_internal": 16.315937042236328, "screenshot_sanity_api": 25.516033172607422, "idcard_sanity_blur_api": 0.0, "idcard_sanity_dark_api": 0.0, "sanity_idcard_internal": 186.63883209228516, "text_grouping_internal": 7.0, "front_detector_internal": 20.0, "idcard_sanity_gloss_api": 0.0, "decode_image_np_internal": 9.847640991210938, "idcard_sanity_bright_api": 0.0, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_inview_api": 0.0, "reformat_result_internal": 25.0, "decode_image_pil_internal": 9.389162063598633, "four_points_transform_api": 0.0, "ocr_front_idcard_internal": 378.23939323425293, "screenshot_sanity_internal": 17.72451400756836, "idcard_sanity_blur_internal": 38.55466842651367, "idcard_sanity_dark_internal": 2.7954578399658203, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_gloss_internal": 20.346403121948242, "idcard_sanity_recaptured_api": 0.0, "national_emblem_detector_api": 0.0, "idcard_sanity_bright_internal": 3.7398338317871094, "idcard_sanity_fakeid_internal": 14.54925537109375, "idcard_sanity_inview_internal": 36.158084869384766, "four_points_transform_internal": 46.0, "idcard_sanity_photocopy_internal": 6.647825241088867, "idcard_sanity_font_check_internal": 17.7915096282959, "idcard_sanity_recaptured_internal": 39.423465728759766, "national_emblem_detector_internal": 16.315937042236328}}, "service_type_id": 1}',
            back_id_card:
              '{"photo_id" : "64947544", "status" : 0, "time" : "2023-03-14T23:58:47.505+07:00", "photo_url" : "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813127_2232723_1678813127062_274984.jpg", "service_type_id" : 1, "api_check" : 1, "text_ocr" : {"DateIssued": "02/02/2023", "PlaceIssued": "cục trưởng cục cảnh sát quản lý hành chính về trật tự xã hội", "logic_status": {"BACK_CMND_01": true, "BACK_CMND_02": true, "BACK_CMND_03": true}, "ratio_valid_fields": "2/2", "is_valid_format": true, "idcard_type": "BACK_CHIP", "aligner_h_w": [1218, 811], "failed_logic": null, "MachineCode": {"error_code": 0, "error_message": "OK", "execute_time": 0.16399288177490234, "photo_id": "0", "service_name": "line_chip_ocr", "call_time": 170.0, "result": {"back_fields": {"name": "DUONGNHUTDONG", "dob": "000726", "idnum": "087200010826"}, "characters": "IDVNM2000108265087200010826<<60007261M2507260VNM<<<<<<<<<<<8DUONG<<NHUT<DONG<<<<<<<<<<<<<<"}, "extra_info": []}}, "extra_info" : {"execute_time": {"ocr_back_idcard_api": 394, "recognizer_internal": 20, "sanity_idcard_internal": 170}, "check_status": {"Is Idcard Invalid Font": false, "Is Idcard Recaptured": false, "Is Idcard Face Fake": false, "Is Idcard Blur": false, "Is Idcard Too Bright": false, "Is Idcard Too Dark": false, "Is Idcard Fully Inview": false, "Is Idcard Photocopy": false, "Is Idcard Gloss": false, "Is Image Screenshot": false}, "metrics": {"check": "0.0", "recaptured": "0.0", "fakeid": "0.0", "blur": "0.001", "bright": "0.001", "dark": "0.017", "inview": "1234.0", "photocopy": "0.088", "gloss": "0.121", "sanity": "0.045"}, "full_execute_time": {"ocr_back_idcard_api": 394.3028450012207, "ocr_back_idcard_internal": 379.9006938934326, "decode_image_pil_api": 0.0, "decode_image_pil_internal": 10.49661636352539, "front-text_api": 369.1673278808594, "front-text_internal": 365.0, "front_align_api": 27.0, "front_align_internal": 20.0, "four_points_transform_api": 0.0, "four_points_transform_internal": 62.0, "front_detector_api": 51.0, "front_detector_internal": 22.0, "text_grouping_api": 0.0, "text_grouping_internal": 1.0, "recognizer_api": 37.1551513671875, "recognizer_internal": 20.837068557739258, "reformat_result_api": 0.0, "reformat_result_internal": 1.0, "line_chip_ocr_api": 170.0, "line_chip_ocr_internal": 0.16399288177490234, "sanity_idcard_api": 261.0, "sanity_idcard_internal": 170.74942588806152, "idcard_sanity_font_check_api": 0.0, "idcard_sanity_font_check_internal": 14.784812927246094, "idcard_sanity_recaptured_api": 0.0, "idcard_sanity_recaptured_internal": 40.303945541381836, "idcard_sanity_fakeid_api": 0.0, "idcard_sanity_fakeid_internal": 12.362480163574219, "idcard_sanity_blur_api": 0.0, "idcard_sanity_blur_internal": 36.446571350097656, "idcard_sanity_bright_api": 0.0, "idcard_sanity_bright_internal": 3.1855106353759766, "idcard_sanity_dark_api": 0.0, "idcard_sanity_dark_internal": 2.965688705444336, "idcard_sanity_inview_api": 0.0, "idcard_sanity_inview_internal": 30.90071678161621, "idcard_sanity_photocopy_api": 0.0, "idcard_sanity_photocopy_internal": 7.244348526000977, "idcard_sanity_gloss_api": 0.0, "idcard_sanity_gloss_internal": 17.5323486328125, "decode_image_np_api": 0.0, "decode_image_np_internal": 9.973287582397461, "screenshot_sanity_api": 24.374723434448242, "screenshot_sanity_internal": 16.43228530883789}}}',
            selfie: null,
            verify_avatar: null,
          },
          {
            session_id: 'c82daf415007b959e016',
            result: '{ "5" : 0 }',
            partner: 12,
            id_card: null,
            back_id_card: null,
            selfie: null,
            verify_avatar:
              '{"prob": 0.709999999999999964, "time": "2023-03-14T23:58:45.374+07:00", "phone": null, "issame": true, "status": 0, "photo_id": "64947541", "api_check": 1, "photo_url": "https://int-z3s.zaloapp.com/zai/internal/upload/media/2023/3/14/1678813125_5137966_1678813124959_274981.jpg", "service_type_id": 5}',
          },
        ],
        start_date: null,
        end_date: null,
        chart_type: null,
        total: 0,
      });
    },
  };
}